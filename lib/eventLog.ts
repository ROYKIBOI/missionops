export interface MissionEvent {
  id: string;
  time: Date;
  department: string;
  title: string;
  description: string;
}

export const missionEvents: MissionEvent[] = [];

export function logMissionEvent(
  department: string,
  title: string,
  description: string
) {

  missionEvents.unshift({

    id: crypto.randomUUID(),

    time: new Date(),

    department,

    title,

    description,

  });

}