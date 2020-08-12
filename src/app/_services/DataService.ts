import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

    private searchText = new BehaviorSubject<string>(null);
    SearchText = this.searchText.asObservable();

    set _SearchText(data: string) {
        this.searchText.next(data);
    }

    get _SearchText(): string {
        return this.searchText.value;
    }
}