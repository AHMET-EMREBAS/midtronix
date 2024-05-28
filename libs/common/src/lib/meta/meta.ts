export interface PropertyValidators {
  minLength?: number;
}

export interface Property {
  name: string;
  validators: PropertyValidators;
  searchables: string[];
}

export interface Meta {
  properties: Record<string, Property>;
  relations: Record<string, Property>;
}
