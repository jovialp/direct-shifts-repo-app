// Statuses
export const STATUSES = {
  OPEN: 'open',
  CLOSED: 'closed',
  ALL: 'all',
};

export const STATUS_LIST = Object.values(STATUSES);

export const SORT_OPTIONS = [
  {
    value: 'created',
    label: 'Created',
  },
  {
    value: 'updated',
    label: 'Updated',
  },
  {
    value: 'popularity',
    label: 'Popularity',
  },
  {
    value: 'long-running',
    label: 'Long-running',
  },
];
