import { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  name: '',
  phone: '',
  address: '',
  city: '',
  pincode: '',
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_PHONE':
      return { ...state, phone: action.payload };
    case 'UPDATE_ADDRESS':
      return { ...state, address: action.payload };
    case 'UPDATE_CITY':
      return { ...state, city: action.payload };
    case 'UPDATE_PINCODE':
      return { ...state, pincode: action.payload };
    default:
      return state;
  }
}

// Create the context object
export const DeliveryAddressContext = createContext();

// Create the provider component
export function DeliveryAddressProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DeliveryAddressContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DeliveryAddressContext.Provider>
  );
}

// Custom hook to simplify accessing the context
export function useDeliveryAddress() {
  return useContext(DeliveryAddressContext);
}
