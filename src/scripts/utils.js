class StateAction {
  constructor(initialValue) {
    this.value = initialValue;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}

export function useState(initialValue) {
    const state = new StateAction(initialValue);

    return [state.value, state.setValue]
}
