export type DeepNonNullable<Type> = {
  [Key in keyof Type]: NonNullable<Type[Key]>
}
