import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }
  getchat(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:6060/chat/getConversationMessages/'+id);
  }
  getUserConversations(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:6060/chat/getActorConversation/'+id);
  }

  createConversation(actors:any): Observable<any> {

    return this.http.post('http://localhost:6060/chat/generateConversationToActors', {
      idactors: actors.idactors,
    }, httpOptions);


  }

  sendMessage(sendMessageRequest:any): Observable<any> {

    return this.http.post('http://localhost:6060/chat/sendMessage', sendMessageRequest, httpOptions);


  }
}
