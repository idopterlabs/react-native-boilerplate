import { api, setAccessToken, exampleMethodName } from './api';

describe('Api Services', () => {
  it('should set a token in Authorization Header', async () => {
    const tokenFake =
      'eyJhbGciOiJIUzI1I6IkpXVCJ9.eyJzdWIiOiIxMNTE2MjM5MDIyfQ.SflKxwRJSMT4fwpMssw5c';

    setAccessToken(tokenFake);

    expect(api.defaults.headers.common.Authorization).toBe(
      `Bearer Token token=${tokenFake}`,
    );
  });

  it('should always return has error message where request is failed', async () => {
    const payload = {
      response: {
        status: 400,
        data: 'Status 400 message error',
      },
    };

    const expectError = new Error('Status 400 message error');

    api.get = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.post = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.patch = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.delete = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.put = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.options = jest.fn().mockResolvedValue(Promise.reject(payload));
    api.delete = jest.fn().mockResolvedValue(Promise.reject(payload));

    await expect(exampleMethodName({})).rejects.toThrowError(expectError);
  });

  it('should always return something response', async () => {
    const payload = {
      data: {
        text: 'test',
      },
    };

    api.get = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.post = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.patch = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.delete = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.put = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.options = jest.fn().mockResolvedValue(Promise.resolve(payload));
    api.delete = jest.fn().mockResolvedValue(Promise.resolve(payload));

    await expect(exampleMethodName({})).resolves.toStrictEqual(payload);
  });
});
