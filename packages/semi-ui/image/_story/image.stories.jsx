import React, { useState, useCallback, useMemo } from "react";
import {
    Image,
    Button,
    ImagePreview,
    Row,
    Col,
    Icon,
    Switch,
    Input
} from "../../index";
import { 
    IconChevronLeft, 
    IconChevronRight, 
    IconMinus,
    IconPlus,
    IconRotate,
    IconDownload,
    IconWindowAdaptionStroked,
    IconRealSizeStroked,
    IconUploadError,
} from "@douyinfe/semi-icons";

export default {
    title: "Image",
    parameters: {
      chromatic: { disableSnapshot: true },
    }
}

const srcList1 = [
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/lion.jpeg",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/seaside.jpeg",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/beach.jpeg",
];

const srcList2 = [
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag1.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag2.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag3.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag4.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag5.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag6.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag7.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/imag8.png",
];

export const basicImage = () => {
    const [escOut, setEscOut] = useState(true);
    const [disableDownload, setDisableDownload] = useState(false);
    const [maskClosable, setMaskClosable] = useState(true);
    const [preview, setPreview] = useState(true);

    const itemStyle = { display: 'flex', alignItems: 'center', flexShrink: 0, width: 'fit-content', margin: '10px 20px 0 0' };
    const menuStyle = { marginBottom: 20, display: 'flex', flexWrap: 'wrap' };

    return (
    <>
        <div style={menuStyle}>
            <div style={itemStyle} id='preview'>
                <span >是否可预览：</span>
                <Switch checked={preview} checkedText="是" uncheckedText="否" onChange={setPreview}/>
            </div>
            <div style={itemStyle} id='escOut'>
                <span>点击 esc 是否关闭预览：</span>
                <Switch checked={escOut} checkedText="是" uncheckedText="否" onChange={setEscOut}/>
            </div>
            <div style={itemStyle} id='disableDownload'>
                <span >是否禁用下载：</span>
                <Switch checked={disableDownload} checkedText="是" uncheckedText="否" onChange={setDisableDownload}/>
            </div>
            <div style={itemStyle} id='maskClosable'>
                <span >点击遮罩层是否关闭预览：</span>
                <Switch checked={maskClosable} checkedText="是" uncheckedText="否" onChange={setMaskClosable}/>
            </div>
        </div>
        <Image
            width={360}
            height={200}
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-lite.jpeg"
            preview={preview ? {
                closeOnEsc: escOut,
                disableDownload,
                maskClosable
            } : false}
        />
    </>
)}

export const LoadErrorImage = () => (
    <>
        <p>加载失败默认样式</p>
        <Image 
            width={200}
            height={200}
            src="https://load-error.jpeg"
        />
        <br />
        <p>自定义加载失败占位图</p>
        <Image 
            width={200}
            height={200}
            src="https://load-error.jpeg"
            fallback={<IconUploadError style={{ fontSize: 50 }} />}
        />
    </>
)

export const ProgressiveLoading = () => {
    const [timestamp, setTimestamp] = React.useState('');
    return (  
        <>
            <Image 
                width={300}
                height={200}
                src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png?${timestamp}`}
                placeholder={<Image 
                    src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-small.jpeg'
                    width={300}
                    height={200}
                    preview={false}
                />}
            />
            <br />
            <Button 
                theme={'solid'}
                onClick={() => {
                    setTimestamp(Date.now());
                }}
                style={{ marginTop: 10 }}
            >Reload</Button>
        </>
    );
}

export const CustomPreviewImage = () => (
    <Image
        width={300}
        height={200}
        src={'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-small.jpeg'}
        preview={{
            src: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png'
        }}
    />
)

export const ControlledPreviewSingle = () => {
    const [visible, setVisible] = useState(false);

    const handlePreviewVisibleChange = useCallback((v) => {
        setVisible(v);
    }, []);

    const handleClick = useCallback(() => {
        setVisible(!visible);
    }, [visible])

    return (
        <>
            <Button onClick={handleClick}>{visible ? "hide" : "show single"}</Button>
            <ImagePreview 
                src={"https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-lite.jpeg"}
                visible={visible}
                onVisibleChange={handlePreviewVisibleChange}
            />
        </>
    )
}

export const ImageShowControlled = () => {
    const [visible, setVisible] = useState(false);

    const handlePreviewVisibleChange = useCallback((v) => {
        setVisible(v);
    }, []);

    return (
        <Image 
            width={360}
            height={200}
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-lite.jpeg"
            preview={{
                visible: visible,
                onVisibleChange: handlePreviewVisibleChange
            }}
        />
    );
}

export const ControlledPreviewMultiple = () => {
    const [visible, setVisible] = useState(false);

    const handlePreviewVisibleChange = useCallback((v) => {
        setVisible(v);
    }, []);

    const handleClick = useCallback(() => {
        setVisible(!visible);
    }, [visible])

    return (
        <>
            <Button onClick={handleClick}>{visible ? "hide" : "show multiple"}</Button>
            <ImagePreview 
                src={srcList1}
                visible={visible}
                onVisibleChange={handlePreviewVisibleChange}
            />
        </>
    )
}

export const BasicPreview = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [customTooltip, setCustomTooltip] = useState(false);
    const [infinite, setInfinite] = useState(false);

    const customTooltipProps = {
        prevTip: "Prev",
        nextTip: "Next",
        zoomInTip: "ZoomIn",
        zoomOutTip: "ZoomOut",
        rotateTip: "Rotate",
        downloadTip: "Download",
        adaptiveTip: "Adaption",
        originTip: "Original size"
    };

    const props = useMemo(() => {
        let props = {};
        if (showTooltip) {
            props = { showTooltip: true };
            if (customTooltip) {
                props = {...props, ...customTooltipProps}
            }
        }
        if (infinite) {
            props.infinite = true;
        }
        return props;
    }, [showTooltip, customTooltip, infinite])

    const itemStyle = { display: 'flex', alignItems: 'center', flexShrink: 0, width: 'fit-content', margin: '10px 20px 0 0' };
    const menuStyle = { marginBottom: 20, display: 'flex', flexWrap: 'wrap' };

    return (
        <>
            <div style={menuStyle}>
                <div style={itemStyle} id='showTooltip'>
                    <span>是否show tooltip：</span>
                    <Switch checked={showTooltip} checkedText="是" uncheckedText="否" onChange={setShowTooltip}/>
                </div>
                <div style={itemStyle} id='customTooltip'>
                    <span>是否custom tooltip：</span>
                    <Switch checked={customTooltip} checkedText="是" uncheckedText="否" onChange={setCustomTooltip}/>
                </div>
                <div style={itemStyle} id='infinite'>
                    <span >是否无限循环：</span>
                    <Switch checked={infinite} checkedText="是" uncheckedText="否" onChange={setInfinite}/>
                </div>
            </div>
            <ImagePreview {...props}>
                {srcList1.map((src, index) => {
                    return (
                        <Image 
                            key={index}
                            src={src}
                            width={200}
                            alt={`lamp${index + 1}`}
                        />
                )})}
            </ImagePreview>
    </>
)};

// test all call back function
export const TestCallBackFunc = () => {
  
    const visibleChange =  useCallback((v) => {
        console.log("visible change", v);
    }, []);

    const change = useCallback((index) => {
        console.log("change", index);
    } , []);

    const zoomIn = useCallback((zoom) => {
        console.log("zoom in", zoom);
    }, []);

    const zoomOut = useCallback((zoom) => {
        console.log("zoom out", zoom);
    }, []);

    const prev = useCallback((index) => {
        console.log("prev", index);
    }, []);

    const next = useCallback((index) => {
        console.log("next", index);
    }, []);

    const ratioChange = useCallback((type) => {
        console.log("ratio change", type);
    }, []);

    const rotateChange = useCallback((angle) => {
        console.log("rotate change", angle);
    }, []);

    const download = useCallback((src, index) =>{
        console.log("download", src, index);
    }, []);

    return (
        <>  
            <ImagePreview
                onVisibleChange={visibleChange}
                // onChange={change}
                onClose={close}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                onPrev={prev}
                onNext={next}
                onRotateLeft={rotateChange}
                onDownload={download}
            >
                <div >
                    {srcList1.map((src, index) => {
                        return (
                            <Image key={index} src={src} width={200} alt={`lamp${index + 1}`} />
                    )})}
                </div>
            </ImagePreview>
        </>
    )
};

export const GridImage= () => {
    const [gap, setGap] = useState(3);
    const [infinite, setInfinite] = useState(true);

    const switchChange = useCallback((value) => {
        setInfinite(value);
    }, []);

    const onInputChange = useCallback((value) => {
        setGap(value)
    }, []);

    return (
    <>  
        <span>是否开启 infinite：</span>
        <Switch checked={infinite} checkedText="是" uncheckedText="否" onChange={switchChange}/>
        <span style={{ marginLeft: 50 }}>输入 preLoadGap： </span>
        <Input style={{ width: 150 }} value={gap} onChange={onInputChange} />
        <ImagePreview
            key={gap}
            preLoad={true}
            preLoadGap={Number(gap)}         
            infinite={infinite}
        >
            <Row style={{ width: 800 }}>
                {srcList2.map((src, index) => {
                    return (
                        <Col span={6} style={{ height: 200 }} key={`col${index}`}>
                            <Image key={index} src={src} style={{ width: 200, height: 200 }} width={200} alt={`lamp${index + 1}`} />
                        </Col>
                )})}
            </Row>
        </ImagePreview>
    </>
)};

export const CustomContainer = () => {
    const srcList = useMemo(() => ([
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/flower.jpeg",
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/duck.jpeg",
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/swan.jpeg",
    ]), []);

    return ( 
        <>
            <div 
                id="container" 
                style={{ 
                    height: 400, 
                    position: "relative",
                }} 
            >
                <ImagePreview
                    getPopupContainer={() => {
                        const node = document.getElementById("container");
                        return node;
                    }}
                    style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
        
                    }}
                >
                    {srcList.map((src, index) => {
                        return (
                            <Image 
                                key={index} 
                                src={src} 
                                width={200} 
                                alt={`lamp${index + 1}`} 
                            />
                        );
                    })}
                </ImagePreview>
            </div>
        </>
    );
}

export const customRenderFooterMenu = () => {
    const download = useCallback((src, index) =>{
        console.log("download", src, index);
    }, []);

    const renderPreviewMenu = useCallback((props) => {
        const {
            ratio,
            disabledPrev,
            disabledNext,
            disableZoomIn,
            disableZoomOut,
            disableDownload,
            onDownload,
            onNext,
            onPrev,
            onRotateLeft,
            onRotateRight,
            onRatioClick,
            onZoomIn,
            onZoomOut,
        } = props;
        return (
            <div 
            style={{ 
                background: "grey", 
                height: 40, 
                width: 280, 
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: 3,
            }}
        >
            <Button
                icon={<IconChevronLeft size="large" />}
                type="tertiary"
                onClick={!disabledPrev ? onPrev : undefined}
                disabled={disabledPrev}
            />
            <Button
                icon={<IconChevronRight size="large" />}
                type="tertiary"                     
                onClick={!disabledNext ? onNext : undefined}
                disabled={disabledNext}
            />
            <Button
                icon={<IconMinus  size="large" />}
                type="tertiary"
                onClick={!disableZoomOut ? onZoomOut : undefined}
                disabled={disableZoomOut} 
            />
            <Button
                icon={<IconPlus size="large" />}
                type="tertiary"
                onClick={!disableZoomIn ? onZoomIn : undefined} 
                disabled={disableZoomIn}
            />
             <Button
                icon={ratio === "adaptation" ? <IconRealSizeStroked size="large" /> : <IconWindowAdaptionStroked  size="large" />}
                type="tertiary"
                onClick={onRatioClick} 
            />
            <Button
                icon={<IconRotate size="large" style={{ transform: 'scale(-1,1)'}}/>}
                type="tertiary"
                onClick={onRotateRight}
            />
            <Button
                icon={<IconRotate size="large" />}
                type="tertiary"
                onClick={onRotateLeft}
            />
            <Button
                icon={<IconDownload size="large" />}
                type="tertiary"
                onClick={!disableDownload ? onDownload : undefined}
                disabled={disableDownload}
            />
    </div>);
    }, []);

    return (
        <>  
            <ImagePreview
                renderPreviewMenu={renderPreviewMenu}
                onDownload={download}
            >
                {srcList1.map((src, index) => {
                    return <Image key={index} src={src} width={200} alt={`lamp${index + 1}`} />
                })}
            </ImagePreview>
        </>
    );
}

export const CustomRenderTitle = () => (
    <>  
        <ImagePreview
            renderHeader={(title) => (
                <div
                    style={{ 
                        background: "green", 
                        width: "100%", 
                        height: "100%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center" 
                    }}
                >
                    {title}
                </div>
            )}
        >
            <div >
                {srcList1.map((src, index) => {
                    return (
                        <Image 
                            key={index} 
                            src={src} 
                            width={200} 
                            alt={`lamp${index + 1}`} 
                            preview={{
                                previewTitle: `lamp${index + 1}`,
                            }} 
                        />
                )})}
            </div>
        </ImagePreview>
    </>
);