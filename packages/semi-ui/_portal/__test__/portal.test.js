import Portal from '../index';
import { BASE_CLASS_PREFIX } from '../../../semi-foundation/base/constants';

describe('Portal', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('reuses the same container el when re-attached after simulated remount (React StrictMode)', () => {
        const wrapper = mount(
            <Portal>
                <span id="portal-child">portal content</span>
            </Portal>
        );
        const el1 = document.querySelector(`.${BASE_CLASS_PREFIX}-portal`);
        expect(el1).toBeTruthy();
        expect(el1.querySelector('#portal-child')).toBeTruthy();

        // Simulate what React 18+ StrictMode does right after mount:
        // componentWillUnmount (detaches el) followed by componentDidMount (restores).
        wrapper.instance().componentWillUnmount();
        expect(document.querySelector(`.${BASE_CLASS_PREFIX}-portal`)).toBeNull();
        wrapper.instance().componentDidMount();

        const el2 = document.querySelector(`.${BASE_CLASS_PREFIX}-portal`);
        // The same node must be reused: createPortal's container identity is preserved,
        // so React will NOT unmount & remount the portal subtree on the next render.
        expect(el2).toBe(el1);
        expect(el2.querySelector('#portal-child')).toBeTruthy();
        wrapper.unmount();
    });

    it('removes container el from DOM on unmount', () => {
        const wrapper = mount(
            <Portal>
                <span>x</span>
            </Portal>
        );
        expect(document.querySelector(`.${BASE_CLASS_PREFIX}-portal`)).toBeTruthy();
        wrapper.unmount();
        expect(document.querySelector(`.${BASE_CLASS_PREFIX}-portal`)).toBeNull();
    });
});
