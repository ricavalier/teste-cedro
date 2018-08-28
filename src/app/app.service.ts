import { Injectable } from '@angular/core';
import { QuestionarioComponent } from './questionario/questionario.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class QuestionarioService {
    private _Url = 'http://127.0.0.1:89/json/questionario.json';

    constructor(private _http: Http) { }
    
    getQuestionario(id: number): Observable<QuestionarioComponent> {
        return this._http.get(this._Url)
            .map((response: Response) => <QuestionarioComponent>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}