import { Task } from "../../domain/entities/Task";

export interface TaskRepository {

      save(task: Task): Promise<Task>;
      findAll(): Promise<Task[]>;
      findById(userId : string): Promise<Task[]>;
      delete(id: string): Promise<void>;
      
}