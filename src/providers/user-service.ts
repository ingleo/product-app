import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/user';

@Injectable()
export class UserService {

	private usersURI = 'http://138.68.0.83:7070/api/v1/user';
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(public http: Http) {
		console.log('Hello UserService Provider');
	}

	getUsers(): Observable<User[]> {
	    return this.http.get(this.usersURI + '/list')
	        .map(response => response.json() as User[])
	        .catch(this.handleError);
	}

    sigin(email: string, pass: string): Observable<User> {
        return this.http
            .post(this.usersURI + '/sign-in',
                  JSON.stringify({ email: email, password: pass }),
                  { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

	create(user: User): Observable<User> {
        return this.http
            .post(this.usersURI + '/sign-up',
                  JSON.stringify(user),
                  { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

    chgPassword(email: string, pass: string): Observable<User> {
        return this.http
            .post(this.usersURI + '/forgot-password/' + email,
                  JSON.stringify({ password: pass }),
                  { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }



	update(user: User): Observable<User> {
	    const url = `${this.usersURI}/update/${user.email}`;
	    return this.http
	        .put(url, JSON.stringify(user), {headers: this.headers})
	        .map(res => res.json())
	        .catch(this.handleError);
	}

    getUser(user: User): Observable<User> {
		const url = `${this.usersURI}/profile/${user.email}`;
        return this.http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    remove(user: User): Observable<any> {
        alert('entra a metodo remove' + user.email);
        const url = `${this.usersURI}/delete/${user.email}`;
        //const url = `${this.usersURI}/delete/131`;
        return this.http
            .delete(url)
            //.map(() => {{"deleted":"ok"};})
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}
