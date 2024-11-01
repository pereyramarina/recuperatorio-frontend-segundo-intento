import type { Task } from "@/models/Task";
import type { TaskState } from "@/models/TaskState";
import { defineStore } from "pinia";

export const useTaskStore = defineStore({
    id: 'task',
    state: (): TaskState => ({
        loading: false,
        data: []
    }),
    actions: {
        addTask(task: Task) {
            if (this.data.length > 0) {
                const ultimo_id = this.data.reverse()[0].id
                task.id = ultimo_id + 1
            }
            this.data.push(task);
        },
        removeTask(task: Task) {
            this.data = this.data.filter((tarea: Task) => tarea.id === task.id);
        },
        updateTaskStatus(task: Task) {
            const tarea = this.data.findIndex((tarea: Task) => tarea.id === task.id);
            if (tarea !== -1) {
                this.data[tarea].status = !this.data[tarea].status;
            } else {
                console.error('No se encontro la tarea');
            }
        }
    }
});