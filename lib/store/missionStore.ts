import { mission } from "@/lib/mission";

type Listener = () => void;

const listeners = new Set<Listener>();

export function getMissionState() {
  return mission;
}

export function subscribe(listener: Listener) {

  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };

}

export function notifyMissionChanged() {

  listeners.forEach((listener) => listener());

}