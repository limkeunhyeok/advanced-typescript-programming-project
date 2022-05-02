import { Resolver, ResolverInterface } from "type-graphql";
import { TodoItem } from "./TodoItem";

@Resolver(() => TodoItem)
export class TodoItemResolver implements ResolverInterface<TodoItem> {

}