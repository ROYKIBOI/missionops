import { blockers } from "@/mock/missionDrivers";
import { ReadinessDriver } from "@/types/mission";

export interface DependencyResult {
  rootCause: ReadinessDriver;
  chain: ReadinessDriver[];
}

export function resolveDependency(
  driverId: string
): DependencyResult {

  const chain: ReadinessDriver[] = [];

  let current = blockers.find(
    b => b.id === driverId
  );

  while(current){

    chain.unshift(current);

    if(!current.dependsOn){
      break;
    }

    current = blockers.find(
      b => b.id === current.dependsOn
    );

  }

  return{

    rootCause: chain[0],

    chain

  };

}