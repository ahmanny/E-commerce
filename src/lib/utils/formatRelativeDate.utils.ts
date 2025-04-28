// utils/formatRelativeDate.js
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatRelativeDate(dateString: string) {
    const date = dayjs(dateString);
    const now = dayjs();
    const diffInDays = now.diff(date, 'day');

    if (diffInDays < 1) return 'Today';
    if (diffInDays < 7) return 'Last week';
    if (diffInDays < 30) return 'Last month';

    return date.fromNow();
}
