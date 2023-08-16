import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form } from '../../organisms/form/form';
import { UserLogin } from '../../templates/user-login/user-login';
import { LoginStyle } from './login-style';
import { Login as LoginInterface } from '../../../utils/interfaces/login';

export const Login = () => {
  return (
    <UserLogin/>
  );
}