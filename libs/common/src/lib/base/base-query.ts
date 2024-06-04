export interface IBaseQueryDto<S = any, W = any, O = any> {
  take: number;
  skip: number;
  withDeleted: boolean;
  search: S;
  where: W;
  order: O;
}
