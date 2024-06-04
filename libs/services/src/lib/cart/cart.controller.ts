import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
  InjectRepository,
  Repository,
  SelectDto,
} from '@mdtx/core';
import { CreateCartDto, Cart, UpdateCartDto } from '@mdtx/database';


const R = RestRouteBuilder.get('Cart');

@R.Controler()
export class CartController {
  constructor(
    @InjectRepository(Cart) protected readonly repo: Repository<Cart>
  ) {}

  @R.Metadata()
  async metadata() {
    return {
      count: await this.repo.count(),
    };
  }

  @R.SaveOne()
  async save(@R.Body() body: CreateCartDto) {
    return await this.repo.save(body);
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() select: SelectDto<Cart>
  ) {
    const { take, skip, withDeleted } = paginator;

    return this.repo.find({
      take,
      skip,
      withDeleted,
      select: select.select,
    });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateCartDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCart(@R.Param() param: RelationDto<Cart>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Cart>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Cart>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Cart>) {
    return this.service.unsetRelation(param);
  }
}
