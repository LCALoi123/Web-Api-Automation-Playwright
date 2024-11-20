import { FakerUtils } from '../../utils/FakerUtils'

export const RegisterDefault = {
    username: FakerUtils.getUserName(),
    firstName: FakerUtils.getFirstName(),
    lastName: FakerUtils.getLastName(),
    email: FakerUtils.getEmail(),
    password: FakerUtils.getPassword(),
    phone: FakerUtils.getPhone(),
    userStatus: 1
}

export const RegisterInvalidPhone = {
    ...RegisterDefault,
    phone: '',
}


export const RegisterExistingUserName = {
    ...RegisterDefault,
    username: 'theUser',
}