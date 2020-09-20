import Profile from '../model/Profile'
import {ProfileApi} from '../api/profile-api'

export class ProfileService{
    
    private profileApi:ProfileApi= new ProfileApi(); 

    getProfile = ():Profile => {
        return this.profileApi.getProfile();
    }
}
