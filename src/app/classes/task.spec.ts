import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task("bend-bar", "used to bend bars during construction", "url-to-bend-bar", "bent-edge")).toBeTruthy();
  });
});
