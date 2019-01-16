

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

/*import { UserStates, getCoursesState } from '../users/store/users.reducers';
import * as Users from '../users/store/users.actions';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private store: Store<UserStates>) {}

  getFromStoreOrAPI(): Observable<any> {
    return this.store
      .select(getCoursesState)
      .do((data: any) => {
        if (!data.courses.length) {
          this.store.dispatch(new Users.());
        }
      })
      .filter((data: any) => data.courses.length)
      .take(1);
  }

  canActivate(): Observable<boolean> {
    return this.getFromStoreOrAPI()
      .switchMap(() => of(true))
      .catch(() => of(false));
  }
}*/
