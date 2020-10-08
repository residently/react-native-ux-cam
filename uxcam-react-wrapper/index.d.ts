export default class UXCam {
    /**
     *  This will start the UXCam system, get the settings configurations from our server and start capturing the data according to the configuration.
     *
     *  @brief Start the UXCam session
     *  @parameter userAPIKey   The key to identify your UXCam app - find it in the UXCam dashboard for your account 
     */
    static startWithKey: (apiKey: string) => void;

    /**
     * Starts a new session after the {@link #stopSessionAndUploadData()} method has been called.
     * This happens automatically when the app returns from background.
     */
    static startNewSession: () => void;

    /**
     * Stop current uxcam session and send captured data to server.<br>
     * Use this to start sending the data on UXCam server without the app going into the background.<br>
     * This starts an asynchronous process and returns immediately.
     */
    static stopSessionAndUploadData: () => void;

    /**
     *  Returns a URL path that shows the current session when it compeletes
     *
     *  @note This can be used for tying in the current session with other analytics systems
     *
     *  @return url path for current session or nil if no verified session is active
     */
    static urlForCurrentSession: () => Promise<string | undefined | null>;

    /**
     *  Returns a URL path for showing all the current users sessions
     *
     *  @note This can be used for tying in the current user with other analytics systems
     *
     *  @return url path for user session or nil if no verified session is active
     */
    static urlForCurrentUser: () => Promise<string | undefined | null>;

    /**
        Hide / un-hide the whole screen from the recording
     
        Call this when you want to hide the whole screen from being recorded - useful in situations where you don't have access to the exact view to occlude
        Once turned on with a TRUE parameter it will continue to hide the screen until called with FALSE
     
        @parameter hideScreen Set TRUE to hide the screen from the recording, FALSE to start recording the screen contents again
        @parameter hideGesture Set TRUE to hide the gestures in the screen from the recording, FALSE to start recording the gestures in the screen again
    */
    static occludeSensitiveScreen: (hideScreen: boolean, hideGesture?: boolean) => void;

    /**
        Hide / un-hide all UITextField views on the screen
     
        Call this when you want to hide the contents of all UITextFields from the screen capture. Default is NO.
     
        @parameter occludeAll Set `true` to hide all UITextField views on the screen in the recording, `false` to stop occluding them from the screen recording.
     */
    static occludeAllTextView: () => void;

    /**
        Hide / un-hide all UITextField views on the screen
     
        Call this when you want to hide the contents of all UITextFields from the screen capture. Default is NO.
     
        @parameter occludeAll Set `true` to hide all UITextField views on the screen in the recording, `false` to stop occluding them from the screen recording.
     */
    static occludeAllTextFields: (occludeAll: boolean) => void;

    /**
     UXCam uses a unique number to tag a device.
     You can set a user identity for a device allowing you to more easily search for it on the dashboard and review their sessions further.
     
     @parameters userIdentity String to apply to this user (device) in this recording session
     */
    static setUserIdentity: (userIdentity: string | number) => void;

    /**
     Add a key/value property for this user
     
     @parameter propertyName Name of the property to attach to the user
     @parameter value A value to associate with this property
     
     @note Only number and string value types are supported to a maximum size per entry of 1KiB
     */
    static setUserProperty: (propertyName: string, value: string | number) => void;

    /**
     Add a single key/value property to this session
     
     @parameter propertyName Name of the property to attach to the session recording
     @parameter value A value to associate with this property
     
     @note Only number and string value types are supported to a maximum size per entry of 1KiB
     */
    static setSessionProperty: (propertyName: string, value: string | number) => void;

    /**
        Insert a general event, with associated properties, into the timeline - stores the event with the timestamp when it was added.
     
        @parameter eventName Name of the event to attach to the session recording at the current time
        @parameter properties An NSDictionary of properties to associate with this event
     
        @note Only number and string property types are supported to a maximum count of 100 and maximum size per entry of 1KiB
     */
    static logEvent: (eventName: string, properties?: any) => void;


    /**
     * @deprecated use NativeEventEmitter to listen for 'UXCam_Verification_Event' event.
     * Example:
     * const eventEmitter = new NativeEventEmitter(RNUxcam);
     * eventEmitter.addListener('UXCam_Verification_Event', event => {
     *  if(event.success){
     *    //do something
     * }else{
     *    //do something
     * }
     * });
     */
    static addVerificationListener: (error: Function, success: Function) => void;

    /**
     *  Returns the current recording status
     *
     *  @return true if the session is being recorded
     */
    static isRecording: () => boolean;

    /**
     * Pause the screen recording
     */
    static pauseScreenRecording: () => void;

    /**
     *  Resumes a paused session - will cancel any remaining pause time and resume screen recording
     */
    static resumeScreenRecording: () => void;

    /**
     *  This will cancel any current session recording and opt this device out of future session recordings until `optInOverall` is called
     *  @note The default is to opt-in to session recordings, but not to screen recordings, and the defaults will be reset if the user un-installs and re-installs the app
     */
    static optOutOverall: () => void;

    /**
     *  This will opt this device out of schematic recordings for future settings
     *  - any current session will be stopped and restarted with the last settings passed to `startWithKey`
     */
    static optOutOfSchematicRecordings: () => void;

    /**
     *  This will opt this device into session recordings
     *  - any current session will be stopped and a new session will be started with the last settings passed to `startWithKey`
     */
    static optInOverall: () => void;

    /**
     *  This will opt this device back into session recordings
     */
    static optIntoSchematicRecordings: () => void;

    /**
     *  Returns the opt-in status of this device
     *  @return true if the device is opted in to session recordings, false otherwise. The default is false.
     */
    static optInOverallStatus: () => boolean;

    /** Returns the opt-in status of this device for schematic recordings
     *  @returns true if the device is opted in to schematic recordings, NO otherwise. The default is false.
     *  @note Use in conjunction with optInOverallStatus to control the overall recording status for the device
     */
    static optInSchematicRecordingStatus: () => boolean;

    /**
     *  @Deprecated use optOutOverall() instead
     *  This will cancel any current session recording and opt this device out of future session recordings until `optIn` is called
     *  @note The default is to opt-in to recordings, and the default will be reset if the user un-installs and re-installs the app
    */
    static optOut: () => void;

    /**
     *  @Deprecated use optInOverall() instead
     */
    static optIn: () => void;

    /**
     *  @Deprecated use optInOverallStatus() instead
    */
    static optStatus: () => boolean;

    static optIntoVideoRecording: () => void;

    static optOutOfVideoRecording: () => void;

    static optInVideoRecordingStatus: () => boolean;

    /**
     *  Cancels the recording of the current session and discards the data
     *
     * @note A new session will start as normal when the app nexts come out of the background (depending on the state of the MultiSessionRecord flag), or if you call `startNewSession`
    */
    static cancelCurrentSession: () => void;

    /**
     *  By default UXCam will end a session immediately when your app goes into the background. But if you are switching over to another app for authorisation, or some other short action, and want the session to continue when the user comes back to your app then call this method with a value of TRUE before switching away to the other app.
     *  UXCam will pause the current session as your app goes into the background and then continue the session when your app resumes. If your app doesn't resume within a couple of minutes the original session will be closed as normal and a new session will start when your app eventually is resumed.
     *
     *  @brief Prevent a short trip to another app causing a break in a session
     *  @param continueSession Set to TRUE to continue the current session after a short trip out to another app. Default is FALSE - stop the session as soon as the app enters the background.
     */
    static allowShortBreakForAnotherApp: (continueSession: boolean) => void;

    /**
     *  @brief Resume after short break. Only used in android, does nothing on iOS
     */
    static resumeShortBreakForAnotherApp: () => void;

    /**
     *  Get whether UXCam is set to automatically record a new session when the app resumes from the background
    */
    static getMultiSessionRecord: () => boolean;

    /**
     *  Set whether to record multiple sessions or not
     *
     *  @parameter multiSessionRecord TRUE to record a new session automatically when the device comes out of the background. If FALSE then a single session is recorded, when stopped (either programmatically with `stopApplicationAndUploadData` or by the app going to the background) then no more sessions are recorded until `startWithKey` is called again).
     *  @note The default setting is to record a new session each time a device comes out of the background. This flag can be set to FALSE to stop that. You can also set this with the appropriate startWithKey: variant. (This will be reset each time startWithKey is called)
    */
    static setMultiSessionRecord: (multiSessionRecord: boolean) => void;

    /**
     *  @brief Deletes any sessions that are awaiting upload
     *  @note Advanced use only. This is not needed for most developers. This can't be called until UXCam startWithKey: has completed
     */
    static deletePendingUploads: () => void;

    /**
     *  @brief Returns how many sessions are waiting to be uploaded
     *
     *  Sessions can be in the Pending state if UXCam was unable to upload them at the end of the last session. Normally they will be sent at the end of the next session.
     */
    static pendingSessionCount: () => number;

    /**
    *  @brief IOS only. Uploads sessions that were pending to be uploaded
    *
    *  Sessions can be in the Pending state if UXCam was unable to upload them at the end of the last session. Normally they will be sent at the end of the next session.
    */
    static uploadPendingSession: () => void;

    /**
     * Hide a view that contains sensitive information or that you do not want recording on the screen video.
     *
     * @parameter sensitiveView The view to occlude in the screen recording
     */
    static occludeSensitiveView: (sensitiveView: any) => void;

    /**
     * Stop hiding a view that was previously hidden
     * If the view passed in was not previously occluded then no action is taken and this method will just return
     *
     * @parameter view The view to show again in the screen recording
     */
    static unOccludeSensitiveView: (view: any) => void;

    /**
     * Hide a view that contains sensitive information or that you do not want recording on the screen video.
     *
     * @parameter sensitiveView The view to occlude in the screen recording
     */
    static occludeSensitiveViewWithoutGesture: (sensitiveView: any) => void;

    /**
        UXCam normally captures the view controller name automatically but in cases where it this is not sufficient (such as in OpenGL applications)
        or where you would like to set a different unique name, use this function to set the name.
    
        @note Call this in `[UIViewController viewDidAppear:]` after the call to `[super ...]` or automatic screen name tagging will override your value
    
        @parameter screenName Name to apply to the current screen in the session video
    */
    static tagScreenName: (screenName: string) => void;

    /**
        Enable / disable the automatic tagging of screen names
        
        @note By default UXCam will tag new screen names automatically. You can override this using the `tagScreenName` method or use this method to disable the automatic tagging.
    
        @parameters autoScreenTagging Set to TRUE to enable automatic screen name tagging (the default) or FALSE to disable it
    */
    static setAutomaticScreenNameTagging: (autoScreenTagging: boolean) => void;

    /**
        Add a name to the list of screens names that wont be added to the timeline in automatic screen name tagging mode
    
        This will not impact gesture or action recording - just that the timeline on the dashboard will not contain an entry for this screen name if it appears after this call.
        Use this if you have view controllers that are presented but which are not primary user interaction screens to make your dashboard timeline easier to understand.
    
        @param screenName A name to add to the list of screens to ignore
    
        @note This is a convenience method for `addScreenNamesToIgnore([nameToIgnore])`
    */
    static addScreenNameToIgnore: (screenName: string) => void;

    /**
        Add a list of names to the list of screens names that wont be added to the timeline in automatic screen name tagging mode
    
        This will not impact gesture or action recording - just that the timeline on the dashboard will not contain an entry for any of the screens in this list encountered after this call.
        Use this if you have view controllers that are presented but which are not primary user interaction screens to make your dashboard timeline easier to understand.
    
        @param screenNames A list of screen names to add to the ignore list
    */
    static addScreenNamesToIgnore: (screenNames: string[]) => void;

    /**
        Remove the a name from the list of screens to be ignored in automatic screen name tagging mode

        @param screenName The name to remove from the list of ignored screens
        @note This is a convenience method for `removeScreenNamesToIgnore([nameToRemove])`
    */
    static removeScreenNameToIgnore: (screenName: string) => void;

    /**
        Remove the a list of names from the list of screens to be ignored in automatic screen name tagging mode
    
        @param screenNames A list of names to remove from the ignore list
    */
    static removeScreenNamesToIgnore: (screenNames: string[]) => void;

    // Remove all entries from the list of screen names to be ignored in automatic screen name tagging mode
    static removeAllScreenNamesToIgnore: () => void;

    // Get the list of screen names that are being ignored in automatic screen name tagging mode
    static screenNamesBeingIgnored: () => string[];
}