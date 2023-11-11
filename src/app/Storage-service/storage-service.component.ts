import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private STORAGE_KEY = 'user_data';
  private isLoggedIn = false; // Ajoute cette propriété

  saveUserData(data: any): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  getUserData(): any {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  
  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
}
