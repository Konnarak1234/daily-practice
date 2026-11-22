import type { Activity, ActivityInput } from "../types/activity";

type ActivityFormProps = {
    initialActivity : Activity | undefined,
    onSubmit: (input: ActivityInput) => void,
    onCancel: ( () => void ) | undefined,
};

export function ActivityForm(props : ActivityFormProps) {

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return <form className="act-form" onSubmit={handleSubmit}>
        <div className="form-field">
            <label htmlFor="act-title">Action title</label>
            <input id="act-title" placeholder="e.g Having breakfirst" />
        </div>

        <div className="form-field">
            <label htmlFor="act-description">Description</label>
            <textarea className="act-description" placeholder="describe your action..."/>
        </div>

        <div className="form-field">
            <label htmlFor="act-priority">Action priority</label>
            <select id="act-priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
        </div>

        <div className="form-actions">
            <button type="submit" className="primary-button">
                Add Action
            </button>
        </div>

    </form>;
}