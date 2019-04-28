import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Training } from '../model/training';
import { TrainingDay } from '../model/trainingday';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const textOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Accept':'text/plain' }),
  'responseType': 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  public copiedId: number | string;
  
  private trainingsUrl = `//${environment.resturl}:9001/api/trainings`;

  private trainingDayUrl = `//${environment.resturl}:9001/api/trainingday`;

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.trainingsUrl).pipe(
      catchError(this.handleError('getTrainings', []))
    );
  }

  addTraining (training: Training): Observable<Training> {
    return this.http.post<Training>(this.trainingsUrl + "/add", training, httpOptions).pipe(
      catchError(this.handleError<Training>('addTraining'))
    );
  }

  updateTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(this.trainingsUrl + "/update", training, httpOptions).pipe(
      catchError(this.handleError<Training>('updateTraining'))
    );
  }

  updateUsers(training: Training): Observable<Training> {
    return this.http.post<Training>(this.trainingsUrl + "/updateusers", training, httpOptions).pipe(
      catchError(this.handleError<Training>('updateTrainingUsers'))
    );
  }

  deleteTraining(training: Training) {
    return this.http.delete(this.trainingsUrl + "/delete/" + training.id, httpOptions).subscribe();
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  updateTrainingDay(trainingDay: TrainingDay) {
    return this.http.post<TrainingDay>(this.trainingsUrl + "/updateday", trainingDay, httpOptions).subscribe();
  }

  addTrainingDay(training: Training, trainingDay: TrainingDay): Observable<TrainingDay> {
    return this.http.post<TrainingDay>(this.trainingsUrl + "/" + training.id + "/addday", trainingDay, httpOptions).pipe(
      catchError(this.handleError<TrainingDay>('addTrainingDay'))
    );
  }

  removeTrainingDay(trainingDayId: number) {
    return this.http.post(this.trainingsUrl + "/removeday/" + trainingDayId, httpOptions).subscribe();
  }

  getTrainingContent(trainingDayId: number): Observable<string> {
    return this.http.get<string>(this.trainingDayUrl + "/content/" + trainingDayId, textOptions).pipe(
      catchError(this.handleError<string>('getTrainingContent'))
    );
  }

  setTrainingContent(trainingDayId: number, content: string) {
    return this.http.post(this.trainingDayUrl + "/content/" + trainingDayId, content, textOptions).subscribe();
  }

  copyDay(trainingDayId: number, trainingDay: TrainingDay): Observable<TrainingDay> {
    return this.http.post<TrainingDay>(this.trainingDayUrl + "/copyday/" + trainingDayId, trainingDay, httpOptions).pipe(
      catchError(this.handleError<TrainingDay>('copyDay'))
    );
  }  
}
