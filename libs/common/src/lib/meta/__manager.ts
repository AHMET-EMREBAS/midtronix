import { EntityMetadata, __EntityPropertyMetadata } from './__common';

export class MetaManager<T> {
  constructor(protected readonly metadata: EntityMetadata<T>) {}

  columns() {
    return (
      Object.entries(this.metadata.properties) as [
        string,
        __EntityPropertyMetadata<T>
      ][]
    ).map(([key, value]) => ({ name: key, ...value }));
  }

  visibleColumns() {
    return (
      Object.entries(this.metadata.properties) as [
        string,
        __EntityPropertyMetadata<T>
      ][]
    )
      .filter(([key, value]) => value.hidden !== true)
      .map(([key, value]) => ({ name: key, ...value }));
  }

  crateFormFields() {
    return (
      Object.entries(this.metadata.properties) as [
        string,
        __EntityPropertyMetadata<T>
      ][]
    )
      .filter(([, value]) => value.create !== false)
      .map(([key, value]) => {
        return {
          name: key,
          ...value,
        };
      });
  }

  updateFormFields() {
    return (
      Object.entries(this.metadata.properties) as [
        string,
        __EntityPropertyMetadata<T>
      ][]
    )
      .filter(([, value]) => value.update !== false)
      .map(([key, value]) => {
        return {
          name: key,
          ...value,
        };
      });
  }
}
