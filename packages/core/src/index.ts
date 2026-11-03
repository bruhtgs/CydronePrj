export type CydroneModuleId =
  | "guardian"
  | "automata"
  | "nexus"
  | "control"
  | "arcade"
  | "insight"
  | "presence";

export interface ModuleDescriptor {
  id: CydroneModuleId;
  displayName: string;
  description: string;
  enabledByDefault: boolean;
}

export type PermissionAction =
  | "message.send"
  | "member.timeout"
  | "member.kick"
  | "member.ban"
  | "role.assign"
  | "channel.manage"
  | "memory.read"
  | "memory.write"
  | "memory.delete";

export interface ActionRequest {
  actorId: string;
  guildId: string;
  action: PermissionAction;
  targetId?: string;
  source: "user" | "automation" | "ai" | "system";
  reason: string;
}

export interface PermissionDecision {
  allowed: boolean;
  reason: string;
}

/**
 * Safe default: deny until a real policy engine explicitly authorizes an action.
 * This is a primitive, not the finished authorization system.
 */
export function denyByDefault(_request: ActionRequest): PermissionDecision {
  return {
    allowed: false,
    reason: "No authorization policy has granted this action.",
  };
}

export const MODULES: readonly ModuleDescriptor[] = [
  { id: "guardian", displayName: "Guardian", description: "Security and moderation", enabledByDefault: false },
  { id: "automata", displayName: "Automata", description: "Automation and workflows", enabledByDefault: false },
  { id: "nexus", displayName: "Nexus", description: "Community progression and social systems", enabledByDefault: false },
  { id: "control", displayName: "Control", description: "Server management tools", enabledByDefault: false },
  { id: "arcade", displayName: "Arcade", description: "Games and entertainment", enabledByDefault: false },
  { id: "insight", displayName: "Insight", description: "Community analytics", enabledByDefault: false },
  { id: "presence", displayName: "Cydrone Presence", description: "Personality, conversation, and consent-based memory", enabledByDefault: false },
] as const;
