export function getStatus(isRead: boolean, completed: number, all: number) {
    if (!isRead) {
        return {
            status: "inactive",
            text: "Не начат"
        }
    } else if (completed === all) {
        return {
            status: "completed",
            text: "Пройден"
        }
    } else {
        return {
            status: "active",
            text: "В процессе"
        }
    }
}