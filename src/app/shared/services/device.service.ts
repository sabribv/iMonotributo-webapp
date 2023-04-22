import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeviceType } from '../enum/device-type';

@Injectable()
export class DeviceService {
  private deviceTypeSubject: BehaviorSubject<DeviceType>;

  get deviceType$(): Observable<DeviceType> {
    return this.deviceTypeSubject.asObservable();
  }

  constructor() {
    this.deviceTypeSubject = new BehaviorSubject<DeviceType>(DeviceType.desktop);
  }

  setDeviceType(type: DeviceType) {
    this.deviceTypeSubject.next(type);
  }
}
