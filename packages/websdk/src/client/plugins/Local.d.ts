declare const libraryComponents: {
    QPhoneInput: import("vue/types/vue").ExtendedVue<import("vue").default, {
        defaultMask: string;
        isValid: boolean;
        countryAlpha2Code: string;
        allCountries: ({
            name: string;
            international_name: string;
            turkish_name: string;
            code: string;
            dial_code: string;
        } | {
            name: string;
            international_name: string;
            code: string;
            dial_code: string;
            turkish_name?: undefined;
        })[];
        turkishNameCountries: {
            name: string;
            international_name: string;
            code: string;
            dial_code: string;
        }[];
        phoneNumber: string;
        phoneData: {
            countryPhoneNumber: string;
            phoneNumber: string;
            maskedPhoneNumber: string;
            mask: string;
            isValid: boolean;
            countryAlpha2Code: string;
            countryDialCode: string | null;
        };
        rules: {
            required: (value: any) => true | "Zorunlu alanı doldurunuz .";
            valid: (value: any) => true | "Lütfen geçerli bir telefon numarası giriniz .";
        };
    }, {
        changePhone(): void;
        changeCountryCode(): void;
        inputPhone(): void;
        itemText: (item: any) => string;
        getCountryDialCode(countryAlpha2Code: any): string | null;
        phoneNumberInput(): void;
        reset(): void;
        validate(checkValid: any): boolean;
    }, {
        getPhoneMask: string;
    }, {
        countryCodeAppendIcon: string;
        phoneAppendIcon: string;
        fullPhoneNumber: any;
        autoCompleteDisabled: any;
        dense: any;
        textFieldDisabled: any;
        required: any;
        outlined: any;
        label: any;
        locale: string;
    }>;
    QTableCell: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        colspan: string;
    }>;
    GroupBox: import("vue/types/vue").ExtendedVue<import("vue").default, {
        toggleContentData: boolean;
        toggleTitle: string;
        toggleRightTitle: string;
        bGColor: string;
        rigthSubtitle: string;
        leftSubtitle: string;
    }, {
        switchContent(): void;
        getHeaderClass(): string;
        resetForm(): void;
        disableForm(state: boolean): void;
        arrangeChildElements(componentCollection: import("../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection, type: string, state: boolean): void;
    }, {
        headerClass: any;
        validateAll: boolean;
    }, {
        formName: string;
        __domElements: any;
        toggleContent: boolean;
        showToggleArrow: boolean;
        disableToggle: boolean;
        header: string;
        rightHeader: string;
        leftSubHeader: string;
        leftSubHeaderFontSize: string;
        leftSubHeaderFontColor: string;
        rightSubHeader: string;
        rightSubHeaderFontSize: string;
        rightSubHeaderFontColor: string;
        backGroundColor: string;
        displayData: string;
        showHeader: boolean;
        defaultDiv: boolean;
        customStyle: string;
        _renderingProps: any;
        isTableCell: boolean;
        colspan: string | number;
    }>;
    Ghost: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        text: string;
    }>;
    DError: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        visible: boolean;
        componentName: string;
        componentID: string;
        errorMessage: string;
    }>;
    VContainer: import("vue/types/vue").ExtendedVue<import("vue").default, {
        renderData: boolean;
    }, unknown, unknown, {
        eager: boolean;
        fluid: boolean;
        customCompClass: string;
        _renderingProps: any;
    }>;
    VCol: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        customCompClass: string;
    }>;
    VRow: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        customCompClass: string;
    }>;
    QLabel: import("vue/types/vue").ExtendedVue<import("vue").default, {
        innerClass: string;
        mystyle: string;
    }, unknown, unknown, {
        text: any;
        tagType: any;
        maxWidth: string;
        whiteSpace: string;
        textOverflow: string;
        overflow: string;
    }>;
    QDocumentViewer: import("vue/types/vue").ExtendedVue<import("vue").default, {
        show: boolean;
        loadedRatio: number;
        numPages: number;
        turn: number;
        showToolbar: boolean;
    }, {
        createPdf(): void;
        getType(): any;
        onFrameScrollBottom(): void;
        handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }: {
            target: {
                scrollTop: any;
                clientHeight: any;
                scrollHeight: any;
            };
        }): void;
    }, unknown, {
        src: any;
        height: string;
        width: string;
        page: number;
        scale: string;
        showToolBar: boolean;
        loadingContent: string;
    }>;
    LiveConnection: import("vue/types/vue").ExtendedVue<import("vue").default, {
        typeHelper: import("../../common/shrimp/helpers/typeHelper").TypeHelper;
        seqErrCount: number;
        connection: WebSocket;
        urlData: any;
        urlParamsData: any;
        messageData: any;
        messageRequestList: Function[];
        timerID: number | undefined;
        reconectTryCount: number;
        reason: string;
        onConnectionReason: {
            connectionError: string;
            connectionClose: string;
            userSend: string;
            autoConnect: string;
        };
    }, {
        Send(message?: string | Object | undefined, urlParams?: Object | undefined): void;
        SendMessage(connectionReason?: String | undefined, message?: string | Object | undefined, urlParams?: Object | undefined): void;
        Close(): void;
        _connect(connectionReason?: String | undefined, sendMessage?: (() => void) | undefined, urlParams?: Object | undefined): void;
        _regulateUrl(): void;
        _setUrlParams(): void;
        _calculateReconnectInterval(intervalCounter: number): number;
        _reConnect(reconnectReason?: String | undefined): void;
    }, {
        message: any;
        urlParams: any;
    }, {
        url: string;
        secure: boolean;
        message: any;
        urlParams: any;
        enableIamAuth: boolean;
        sendQueueMessage: boolean;
        autoConnect: boolean;
        reconnect: boolean;
        reconnectInterval: number;
        reconnectBackOff: boolean;
        _renderingProps: any;
    }>;
    CustomAvatarComp: import("vue/types/vue").ExtendedVue<import("vue").default, {
        innerClass: string;
    }, unknown, unknown, {
        text: any;
        exteraInf: any;
        id: any;
        src: any;
        customClass: any;
    }>;
    Tooltip: import("vue/types/vue").ExtendedVue<import("vue").default, {
        value: boolean;
        innerClass: string;
        bottom: boolean;
        left: boolean;
        right: boolean;
        top: boolean;
        forcePositionMarginLeft: string | undefined;
        forcePositionBottom: string | undefined;
        forcePositionRight: string | undefined;
        forcePositionLeft: string | undefined;
        forcePositionMarginTop: string | undefined;
    }, unknown, unknown, {
        toolTipContent: any;
        customClass: any;
        position: any;
        disabled: any;
        openDelay: string | number;
        transition: string;
        maxWidth: string | number;
        minWidth: string | number;
        nudgeWidth: string | number;
        nudgeBottom: string | number;
        nudgeTop: string | number;
        nudgeLeft: string | number;
        nudgeRight: string | number;
        allowOverflow: boolean;
        attach: string;
        absolute: boolean;
        forcePosition: boolean;
    }>;
    VPdfFileViewer: import("vue/types/vue").ExtendedVue<import("vue").default, {
        show: boolean;
        loadedRatio: number;
        numPages: number;
        turn: number;
    }, unknown, unknown, {
        src: any;
        height: string;
        width: string;
        page: number;
        scale: string;
        loadingContent: string;
        customCompClass: string;
    }>;
    QImgZoom: import("vue/types/vue").ExtendedVue<import("vue").default, {
        pageX: number;
        pageY: number;
        bigImgWidth: number;
        bigImgHeight: number;
        bigImgLeft: number;
        bigImgTop: number;
        show: boolean;
        imgWidth: number;
    }, {
        mouseMove(event: any): void;
        mouseLeave(): void;
        mouseEnter(): void;
    }, unknown, {
        src: string;
        zoomedAreaHeight: number;
        zoomedAreaWidth: number;
        zoomedAreaOpacity: string;
        zoomedAreaColor: string;
        zoomedImageHeight: number;
        zoomedImageWidth: number;
        marginLeft: number;
        height: number;
        width: number;
    }>;
    QLightBox: import("vue/types/vue").ExtendedVue<import("vue").default, {
        element: HTMLDivElement;
        pos1: number;
        pos2: number;
        pos3: number;
        pos4: number;
        _bottom: number;
        _left: number;
        _right: number;
        _top: number;
        rect: DOMRect;
    }, {
        closeDragElement(): void;
        elementDrag(e: MouseEvent): void;
        elementMobileDrag(e: TouchEvent): void;
        dragMouseDown(e: MouseEvent): void;
        dragElement(elmnt: HTMLDivElement): void;
        closePopup(): void;
        clickEvent(e: Event): void;
        fixZIndex(): void;
        configureForEditor(): void;
    }, unknown, {
        width: string;
        height: string;
        headerPadding: string;
        right: string;
        left: string;
        top: string;
        bottom: string;
        zIndex: string;
        pinned: boolean;
        backgroundColor: string;
        _renderingProps: any;
        class: string;
        border: boolean;
        closeBtn: boolean;
    }>;
    VInlineDatepicker: import("vue/types/vue").ExtendedVue<import("vue").default, {
        displayDateFormat: string | undefined;
        serviceDateFormat: string | undefined;
        vuetifyDateFormat: string;
        valueInternal: any;
        internalValue: any;
        dateFormatted: string;
        menu1: boolean;
        idTest: string | null;
        isDateChangedBefore: boolean;
        monthFormat: string;
    }, {
        changeMenuValue(): void;
        onKeyUp(event: any): void;
        onBlur(event: any): void;
        onKeyDown(event: any): void;
        initialize(): void;
        changeValueInternal(newValue: any, oldValue: any): void;
        getDisplayFormat(): any;
        getServiceFormat(): any;
        CreateGuid(): string;
        textinput(): void;
        resetValue(): void;
        reset(): void;
        resetValidation(): void;
        validationRefs(): (Element | import("vue").default | import("vue").default[] | Element[])[];
        arraysEqual(a: any, b: any): boolean;
        DateChange(): void;
    }, {
        parsedDate: {
            seperateChar: string;
            splittedFormat: string[] | undefined;
            year: number;
            month: number;
            date: number;
        };
    }, {
        openOnlyIconClick: boolean;
        allowedDates: Function;
        clearable: boolean;
        weekdayFormat: Function;
        placeHolder: string;
        firstDayOfWeek: string | number;
        value: string;
        hideDetails: string | boolean;
        hideMenu: boolean;
        hint: string;
        outlined: boolean;
        type: string;
        willAttach: boolean;
        persistentHint: boolean;
        persistentPlaceholder: boolean;
        readonlyDatepicker: boolean;
        readonlyTextField: boolean;
        rounded: boolean;
        multiple: boolean;
        range: boolean;
        disabled: boolean;
        min: string;
        max: string;
        label: string;
        _renderingProps: any;
        rules: unknown[];
        dateNow: boolean;
        locale: string;
        dense: boolean;
        filled: boolean;
        textFieldClass: string;
        separateChar: string;
        height: string | number;
        tabindex: string | number;
    }>;
    QReCaptcha: import("vue/types/vue").ExtendedVue<import("vue").default, {
        captchaKeys: String;
        language: string;
    }, {
        onLoadCallBack(): void;
        successCallBack(token: string): void;
        expiredCallback(): void;
        errorCallback(): void;
    }, unknown, {
        _renderingProps: any;
        siteKey: string;
        size: string;
        tabindex: number;
    }>;
    VInlineTimePicker: import("vue/types/vue").ExtendedVue<import("vue").default, {
        value: any;
        menu2: boolean;
        modal2: boolean;
    }, {
        timeChange(): void;
        resetValidation(): void;
        validationRefs(): (Element | import("vue").default | import("vue").default[] | Element[])[];
        clickHour(hour: any): void;
    }, unknown, {
        allowedHours: unknown[];
        allowedMinutes: unknown[];
        dense: boolean;
        disabled: boolean;
        label: string;
        min: string;
        max: string;
        outlined: boolean;
        readonly: boolean;
        rules: unknown[];
        value: string;
        textFieldClass: string;
    }>;
    TSComponentWrapper: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, {
        GetProps(propsCB: (props?: import("../../common/shrimp/interfaces/ComponentInterfaces/IExternalProp").IExternalProp[] | undefined) => void): any;
        GetEvents(eventsCB: (events?: import("../../common/shrimp/interfaces/ComponentInterfaces/IExternalEvents").IExternalEvents[] | undefined) => void): any;
        GetQJson(): any;
        OutBoundProps(props: import("../../common/shrimp/interfaces/IDictionary").IDictionary<any>): void;
        OutBoundEvents(events: any): void;
    }, unknown, {
        _renderingProps: {
            context: () => import("../../common/shrimp/context").ContextManager;
            events: () => import("../../common/shrimp/interfaces/IDictionary").IDictionary<Function>;
            props: () => import("../../common/shrimp/interfaces/IDictionary").IDictionary<Object>;
            targetLocalComponent: () => any;
        };
    }>;
    QTutorial: import("vue/types/vue").ExtendedVue<import("vue").default, {
        currentStepValue: undefined;
    }, {
        start(): void;
        goToStep(value: any): void;
        exit(): void;
        manupilateDom(): void;
    }, unknown, {
        _renderingProps: {
            context: () => import("../../common/shrimp/context").ContextManager;
            isEditMode: boolean;
        };
        steps: {
            text: string;
            compID: string;
        }[];
        nextButtonLabel: string;
        skipButtonLabel: string;
        prevButtonLabel: string;
        doneButtonLabel: string;
        hidePrevButton: boolean;
        showStepNumbers: boolean;
        keyboardNavigation: boolean;
    }>;
    QMenu: import("vue/types/vue").ExtendedVue<import("vue").default, {
        mini: boolean;
        resultList: ObjectConstructor[];
        innerClass: string;
        containes: boolean;
    }, {
        setTheme(): "primaryTheme" | "secondaryTheme" | "successTheme" | "errorTheme" | "warningTheme" | "white--text";
        isIconPathAvaliable(imagePath: any): boolean;
        isImagePathAvaliable(imagePath: any): boolean;
        setPrependIcon(imagePath: any): any;
        childrenSetActiveDefaultAsFalse(list: any): void;
        menuItemsLoop(list: any, clickedItem: any): void;
        isCurrentGroupContainsClickedItem(item: any, clickedItem: any): void;
        clickRow(item: Object, index: Number): void;
        calculatePadding(index: number, item: any): Number;
        updateMini(): void;
        onClickGroup(): void;
    }, unknown, {
        activeColor: string;
        width: string;
        miniVariantWidth: string;
        menuData: any;
        collapseOnItemSelect: boolean;
        hideMenuTitle: boolean;
        fixed: boolean;
        color: string;
        autoCollapse: boolean;
        title: string;
        showOnlyIcon: boolean;
    }>;
    QRichText: import("vue/types/vue").ExtendedVue<import("vue").default, {
        extensions: any[];
        htmlContent: string;
        content: string;
    }, {
        blurEvent(): void;
        focusEvent(): void;
        inputEvent(): void;
    }, unknown, {
        ToolBarcolor: string;
        disabled: boolean;
        buttonsHide: boolean;
    }>;
    QFrame: import("vue/types/vue").ExtendedVue<import("vue").default, {
        messageListenerCb: (() => (ev: MessageEvent<any>) => any) | undefined;
    }, {
        test(param: void): void;
        Send(message: any): void;
        post(url: String, params: any, enctype?: String | undefined): void;
        onLoad(): void;
    }, {
        style: string;
    }, {
        url: string;
        width: string;
        height: string;
        border: number;
        isLoading: boolean;
    }>;
    QVideo: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, {
        play(): void;
        pause(): void;
        load(): void;
        currentTime(second?: number | undefined): number | undefined;
        duration(): number;
        currentSrc(): string;
        volume(volume?: number | undefined): number | undefined;
        ended(): void;
        durationChange(): void;
        onPlay(): void;
        onPause(): void;
        onPlaying(): void;
        progress(): void;
        volumeChange(): void;
        rateChange(): void;
        emptied(): void;
        stalled(): void;
        suspend(): void;
        timeUpdate(): void;
        canPlay(): void;
        canPlayThrough(): void;
        waiting(): void;
        error(): void;
    }, unknown, {
        src: string;
        controls: boolean;
        width: string;
        height: string;
        autoPlay: boolean;
        muted: boolean;
        loop: boolean;
        controlsList: string;
        poster: string;
        preload: string;
    }>;
    QQrReader: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, {
        Start(): void;
    }, unknown, unknown>;
};
declare const plugin: {
    register: {
        install(Vue: any, options: any): void;
    };
};
declare const names: string[];
export { names, libraryComponents, plugin };
//# sourceMappingURL=Local.d.ts.map