// This practice is provide dymanic argument for a function.

export type Event =
    | {
        type: "LOG_IN";
        payload: {
            userId: string;
        };
    }
    | {
        type: "LOG_OUT";
    };

// Wrong example
// const sendEvent = (eventType: Event["type"], payload?: any) => {
//     return eventType;
// };

const sendEvent = <Type extends Event["type"]>(
    ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
        ? [type: Type, payload: TPayload]
        : [type: Type]
) => {
    return args[0];
};

// correct
sendEvent("LOG_IN", {
    userId: "123",
});
sendEvent("LOG_OUT");

// should error
sendEvent("LOG_IN", {
    userId: 123,
});
sendEvent("LOG_OUT", {});
sendEvent("LOG_IN", {});
sendEvent("LOG_IN");
