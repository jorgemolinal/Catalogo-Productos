import {render, fireEvent, waitForElementToBeRemoved, screen, act} from '@testing-library/react'
import App from '../../p_react_bajopruebas/src/App';
import {mockdata} from "../utils7/products2.js";
import {MemoryRouter, BrowserRouter} from 'react-router-dom';

const mytestconfig = {
  server_url: "https://dummyjson.com/products",
  num_items: 30,  
  use_server: true,
  loading_timeout_ms: 2000
};

jest.setTimeout(10000);

jest.mock('../../p_react_bajopruebas/src/config/config', () => ( {
  __esModule: true,
  default: mytestconfig  
} ));

afterAll(() => jest.resetAllMocks());

beforeEach(() => {
  jest.useFakeTimers()
});

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
});


let testinfo = {
  name: "La aplicación hace fetch de datos del servidor remoto",
  score: 1,
  msg_ok: "La aplicación hace fetch correctamente",
  msg_error: "La aplicación NO hace fetch correctamente"
}
test(JSON.stringify(testinfo), async () => {
  global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockdata)
  }));

  render(<MemoryRouter initialEntries={["/"]}>
    <App />
  </MemoryRouter>);
  //run the setTimeout so the loading spinner is removed from the UX
  act(()=>jest.runAllTimers());

  await waitForElementToBeRemoved(await document.querySelector('#loading'), { timeout: 8000 })

  const productos = document.querySelectorAll('#catalogoul li');
  expect(productos.length).toBe(35);
  const theinput = document.querySelector('#filtro');
  expect(theinput).toBeInTheDocument();
  const buscabtn = document.querySelector('#buscador');
  expect(buscabtn).toBeInTheDocument();

});