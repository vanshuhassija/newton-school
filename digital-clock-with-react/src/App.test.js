import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('it works', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
});



describe("Should have a clock", () => {
  it("Clock-time should be equal to Current-time", () => {
    const component = shallow(<App />);
    var curr_time = new Date().toLocaleTimeString();
    expect(component.find('#time').text()).toBe(curr_time);
  });
})


describe("Clock is Running", () => {
  it("should increment time by 1sec after 1 second", () => {
    jest.useFakeTimers('modern');
    const component = shallow(<App />);
    const curr_time= component.find('#time').text();
    component.instance().tick();
    jest.advanceTimersByTime(1000);
    const new_time = component.find('#time').text();
    var ch = parseInt(curr_time.slice(0, curr_time.indexOf(':')));
    var cm = parseInt(curr_time.slice(curr_time.indexOf(':')+1, curr_time.lastIndexOf(':')));
    var cs = parseInt(curr_time.slice(curr_time.lastIndexOf(':') + 1, curr_time.indexOf(' ')));
    var cpm = curr_time.indexOf('P');
    var nh = parseInt(new_time.slice(0, new_time.indexOf(':')));
    var nm = parseInt(new_time.slice(new_time.indexOf(':') + 1, new_time.lastIndexOf(':')));
    var ns = parseInt(new_time.slice(new_time.lastIndexOf(':') + 1, new_time.indexOf(' ')));
    var npm = new_time.indexOf('P');
    var flag = false;
    if(cm == 59 && cs == 59){
      if(ch == 11){
        flag = (nh == 12 && nm == 0 && ns == 0 && cpm != npm);
      } else{
        flag = (nh == ch + 1 && nm == 0 && ns == 0 && cpm == npm);
      }
    } else if(cs == 59){
      flag = (nh == ch && nm == cm + 1 && ns == 0 && cpm == npm);
    } else{
      flag = (nh == ch && nm == cm && ns == cs + 1 && cpm == npm);
    }
    expect(flag).toBe(true);
    jest.useRealTimers();
  });
})
