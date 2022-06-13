import { ejecutaTresVeces, explotaPlaneta, recuperaTodo } from './function_mock'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

test('should explota planeta', () => {
  expect(explotaPlaneta(1)).toBe('boom 1')
})

test('ejecutatresveces', () => {
  const mock = jest.fn(() => 'dummy')
  ejecutaTresVeces(mock)
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledTimes(3)
  expect(mock).toHaveBeenCalledWith(2)
})

test('should get todo', async () => {
  mockedAxios.get.mockResolvedValue({
    data: { userId: 1, id: 1, title: 'hola mundo', completed: false },
  })
  const res = await recuperaTodo()
  expect(res.data).toEqual({
    userId: 1,
    id: 1,
    title: 'hola mundo',
    completed: false,
  })
})
