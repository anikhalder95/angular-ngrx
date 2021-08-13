import Policy from '../models/policy';

export default class PolicyState {
  ToDos: Array<Policy>;
  ToDoError: Error;
}

export const initializeState = (): PolicyState => {
  return { ToDos: Array<Policy>(), ToDoError: null };
};
