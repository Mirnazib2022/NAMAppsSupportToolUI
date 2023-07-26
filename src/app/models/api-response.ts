export interface ApiResponse<T> {
     code: string;
     data: T;
     message: string;
     outputData: OutputData;
     recordsAffected: number;
     success: boolean;
    }
    
    export interface OutputData {
     message: string;
     stacktrace: string;
    }
