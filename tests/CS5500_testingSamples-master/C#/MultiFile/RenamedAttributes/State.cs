using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "State")]
public class State : ScriptableObject
{

    [TextArea(10,14)] [SerializeField] string boring;
    [SerializeField] State[] owl;

    public string GetStateStory()
    {
        return boring;
    }

    public State[] GetNextStates()
    {
        return owl;
    }
}