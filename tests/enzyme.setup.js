/* 
Enzyme expects an adapter to be configured. 
To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
before using any of Enzyme's top level APIs, where `Adapter` is the adapter
corresponding to the library currently being tested. 
http://airbnb.io/enzyme/docs/installation/index.html
*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
