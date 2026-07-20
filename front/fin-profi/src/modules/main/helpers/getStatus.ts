export function getStatus(maxProgress: number, completed: number, all: number) {
    if (maxProgress === 0) {
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