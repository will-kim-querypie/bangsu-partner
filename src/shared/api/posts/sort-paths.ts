import * as fs from 'fs';

export default function sortPaths(paths: string[]): string[] {
  const filesWithDates = getFilesWithDates(paths);
  const groupedByDate = groupFilesByDate(filesWithDates);
  const eachSortedByName = sortGroupsByName(groupedByDate);
  return flatDateGroups(eachSortedByName);
}

type FileWithDate = { name: string; ctime: Date };
function getFilesWithDates(paths: string[]): FileWithDate[] {
  return paths.map(path => ({
    name: path,
    ctime: fs.statSync(path).ctime,
  }));
}

type GroupedByDate = Record<string, FileWithDate[]>;
function groupFilesByDate(files: FileWithDate[]): GroupedByDate {
  return files.reduce((acc, file) => {
    const dateKey = formatDateKey(file.ctime);
    acc[dateKey] ??= [];
    acc[dateKey].push(file);
    return acc;
  }, {} as GroupedByDate);
}

function formatDateKey(date: Date): string {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

function sortGroupsByName(groups: GroupedByDate): GroupedByDate {
  const result: GroupedByDate = {};
  for (const key in groups) {
    result[key] = groups[key].sort((a, b) => a.name.localeCompare(b.name));
  }
  return result;
}

function flatDateGroups(groups: GroupedByDate): string[] {
  return Object.entries(groups)
    .sort(([aDate], [bDate]) => +new Date(bDate) - +new Date(aDate))
    .map(([, files]) => files.map(file => file.name))
    .flat();
}
