import { names, splitByUppercase, toPropertyName } from './names';
describe('Names', () => {
  it('should transform list of string into property name', () => {
    const result = toPropertyName('Hello', 'there');

    expect(result).toBe('helloThere');
  });
  it('should splitBy uppercase', () => {
    const result = splitByUppercase('HelloWorldHowAreYou');
    expect(result).toBe('Hello_World_How_Are_You');
  });

  it('should transform names', () => {
    let NAMES = names('ahmet-emrebas');
    expect(NAMES.className).toBe('AhmetEmrebas');
    expect(NAMES.propertyName).toBe('ahmetEmrebas');
    expect(NAMES.fileName).toBe('ahmet-emrebas');
    expect(NAMES.constName).toBe('AHMET_EMREBAS');

    NAMES = names('AhmetEmrebas');
    expect(NAMES.className).toBe('AhmetEmrebas');
    expect(NAMES.propertyName).toBe('ahmetEmrebas');
    expect(NAMES.fileName).toBe('ahmet-emrebas');
    expect(NAMES.constName).toBe('AHMET_EMREBAS');

    NAMES = names('ahmetEmrebas');
    expect(NAMES.className).toBe('AhmetEmrebas');
    expect(NAMES.propertyName).toBe('ahmetEmrebas');
    expect(NAMES.fileName).toBe('ahmet-emrebas');
    expect(NAMES.constName).toBe('AHMET_EMREBAS');
  });
});
