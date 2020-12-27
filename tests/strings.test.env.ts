//
import Path from 'path'
import { initialize, EnvString, EnvNumber, EnvBoolean } from '../src/index'

export class Env {
  @EnvString({ name: 'PROJECT_EMAIL', regex: /^[^\s@]+@\w+(?:\.[^\s@]+)+$/ })
  public email = ''
}

export const env = initialize(Env, Path.join(__dirname, 'strings-test.env'))

export default env