import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { User } from '../model/user';

@Injectable()
export class UserDbService {

  db: SQLite;
  constructor() {
  	this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }

  createTableUser(){
    let sql = 'CREATE TABLE IF NOT EXISTS user(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'email TEXT, ' +
        'password TEXT, ' +
        'firstname TEXT, ' +
        'lastname TEXT, ' + 
        'phone TEXT, ' + 
        'cookie TEXT)';
    return this.db.executeSql(sql, []);
  }

  getUserCookie(userEmail: string) : Promise<string> {
    let query = 'SELECT cookie FROM user WHERE email=?;';
    return this.db.executeSql(query, [])
      .then(response => {

      	if (response.rows.length == 0)
      	{
			console.log('error usuario no existe');
			return '-1'
      	} 
      	else if (response.rows.length == 1)
      	{
			return Promise.resolve(response.rows.item(0).cookie);
      	} 
      	else 
      	{
			console.log('error usuario duplicado');
			return '-2'
      	}
      })
  }

  /*getUser(userEmail: string) : Promise<string> {
    let query = 'SELECT cookie FROM user WHERE email=?;';
    return this.db.executeSql(query, [])
      .then(response => {

      	if (response.rows.length == 0)
      	{
			console.log('error usuario no existe');
			return '-1'
      	} 
      	else if (response.rows.length == 1)
      	{
			return Promise.resolve(response.rows.item(0).cookie);
      	} 
      	else 
      	{
			console.log('error usuario duplicado');
			return '-2'
      	}
      })
  }*/

  getUser(userEmail: string) {
  	let query = 'SELECT * FROM user WHERE email=?;';
	return this.db.executeSql(query, [userEmail])
      .then(response => {
        return Promise.resolve(response.rows.item(0));
      });
  }

  create(user: User) {
  	/*this.getUserCookie(user.email)
  		.then(response => {

			if (response == '-1')
			{*/
				let query = 'INSERT INTO user(email, password, firstname, lastname, phone, cookie) ' +
						    ' VALUES(?, ?, ?, ?, ?, ?)';
		    	return this.db.executeSql(query, 
		    		[user.email, user.password, user.firstname, 
		    	 	user.lastname, user.phone, user.cookie]);
			/*}
  					
  		});*/
  }

  update(user: User){
    let query = 'UPDATE product SET cookie=? WHERE email=?';
    return this.db.executeSql(query, [user.cookie, user.email]);
  }

}
