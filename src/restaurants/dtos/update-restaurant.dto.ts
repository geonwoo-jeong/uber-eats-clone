import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
class UpdateRestauranInputType extends PartialType(CreateRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateRestauranInputType)
  data: UpdateRestauranInputType;
}
