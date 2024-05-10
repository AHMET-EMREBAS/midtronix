describe('BaseLayoutComponent', () => {
  it('should work', () => {
    let result = '';
    ['Toolbar', 'Statusbar'].forEach((e) => {
      ['Left', 'Right', 'Center'].forEach((s) => {
        result +=
          `@ContentChildren(Layout${e}${s}Directive) ${e}${s}!:QueryList<Layout${e}${s}Directive>; ` +
          '\n';
        s;
      });
    });

    ['Content', 'SidenavRight', 'SidenavLeft'].forEach((e) => {
      ['Top', 'Bottom', 'Center'].forEach((s) => {
        result +=
          `@ContentChildren(Layout${e}${s}Directive) ${e}${s}!:QueryList<Layout${e}${s}Directive>; ` +
          '\n';
        s;
      });
    });

    console.log(result);
    expect(1).toBe(1);
  });
});
