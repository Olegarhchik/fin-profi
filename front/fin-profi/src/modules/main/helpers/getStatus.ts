export function getStatus(progress: number, all: number) {
    if (progress === 0) {
        return {
            status: "inactive",
            text: "Не начат"
        }
    } else if (progress < all) {
        return {
            status: "active",
            text: "В процессе"
        }
    } else {
        return {
            status: "completed",
            text: "Пройден"
        }
    }
}