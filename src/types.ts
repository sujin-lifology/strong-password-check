export type CriteriaKey = "lowercase" | "uppercase" | "digits" | "specialChars";
export type Criteria = {
    [Key in CriteriaKey]: {
        pattern: RegExp;
        score: 1;
        message: string;
    };
};

export type DefaultConfig = {
    lowercase: boolean;
    uppercase: boolean;
    digits: boolean;
    specialChars: boolean;
    minLength: number;
};

export type Result = {
    messages: string[];
    strength: string;
};
