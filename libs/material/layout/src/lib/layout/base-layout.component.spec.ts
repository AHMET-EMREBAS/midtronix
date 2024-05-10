describe('BaseLayoutComponent', () => {
  it('should work', () => {
    let result = '';
    ['Toolbar', 'Statusbar'].forEach((e) => {
      ['Left', 'Right', 'Center'].forEach((s) => {
        result += `@Input() ${e}${s}?:Navlist; ` + '\n';
      });
    });
    // @Input() toolbarLeftItems?: Navlist;
    ['Content', 'SidenavRight', 'SidenavLeft'].forEach((e) => {
      ['Top', 'Bottom', 'Center'].forEach((s) => {
        result += `@Input() ${e}${s}?:Navlist; ` + '\n';
      });
    });

    console.log(result);
    expect(1).toBe(1);
  });
});
